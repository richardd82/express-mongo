import { useEffect, useState } from 'react'
import axios from 'axios'
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const DomainsChart = () => {
    const [emailDomains, setEmailDomains] = useState([])
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];


    const getEmailDomains = async () => {
        try {
            const res = await axios.get('http://localhost:3000/email-domains')
            // console.log(res?.data)
            setEmailDomains(res?.data)
        } catch (error) {
            console.log({ message: error.message })
        }
    }
    useEffect(() => {
        if (emailDomains?.length === 0) {
            getEmailDomains()
        }
    }, [emailDomains?.length])
    console.log('Los Dominios:', emailDomains)
    return (
        <div>
            <PieChart width={618} height={288}>
                <Pie
                    dataKey="count"
                    isAnimationActive={true}
                    data={emailDomains}
                    cx="65%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                />
                {emailDomains.map((entry, index) => {
                    // console.log('EntryColor', entry)
                    // console.log('INDEX Color', index)
                    <Cell key={`cell-${index}`} fill={COLORS[(index +1) % COLORS.length]} />
                })}
                <Tooltip
                    formatter={(value, name, { payload }) => {
                        console.log('PAYLOAD', payload)
                        return payload ? [value, `${payload._id}`] : [value, name];
                    }}
                />
                <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    formatter={(value, entry) => {
                        console.log('Entry', entry)
                        return `${entry.payload._id}: ${entry.payload.value}`
                    }}
                />
            </PieChart>
        </div>
    )
}

export default DomainsChart