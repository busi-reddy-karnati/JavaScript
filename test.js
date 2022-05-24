import React from 'react'

export default function test() {
    const [first, setfirst] = useState(second)
    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    
  return (
    
    <div>
        
    </div>
  )
}
