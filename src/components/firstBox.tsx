import {useState} from 'react'
export default function useContact() {
  const [data, setData] = useState(true)
  const handleClick = () => {
    setData(!data)

  }

  const ele = () => {
    if (data) return <div>zhende</div>
    return <div>jiade</div>
  }
  return (
    <div className="first-box">
      <div className="person-introduction">
        <div className="text-2xl">Hey everyone!</div>
        <div className="text-7xl text-white font-bold">How's it going?</div>
        <div className="text-4xl text-white font-bold">I'm Yuanming<br />
        a front-end development engineer.</div>
        <div className="text-2xl text-white font-bold">my Email: s87587394@gmail.com</div>
      </div>
      <div className="related-introductions">
        <div className="technical-introduction">
          <div>HTML、CSS、JavaScript、TypeScript</div>
          <div>
            Vue2、Vue3、Nuxt、React
          </div>
          <div>
            TailwindCss、Postcss、ElementUI、Echarts、vitest
          </div>
          <div>GitFlow、Docker、NodeJS、ApolloGraphQL</div>
        </div>
        <div className="contact-way">3</div>
      </div>
    </div>
  )
}