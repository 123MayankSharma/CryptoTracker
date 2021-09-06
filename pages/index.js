import Layout from '../components/Layout.js'
import Link from "next/link"
/* import Image from 'next/image */
export async function getStaticProps(context) {

    const poke = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    const { results } = await poke.json()
    const pokemon = results.map((result, index) => {
        const ModIndex = ("00" + (index + 1)).slice(-3)
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ModIndex}.png`
        return {
            ...result, image
        }
    })
    return {
        props: { pokemon }
    }



}





export default function Home({ pokemon }) {
    return (
        <div>
            <Layout title="Pokedex">
                <h1 className="text-4xl mb-8 text-center">Pokedex</h1>
                <ul>
                    {pokemon.map((info, index) => {
                        return (<>
                            <li key={index*Math.random()}>
                                <Link href={`/pokemon?id=${index + 1}`}>
                                    <a className="border p-4 border-gray-50 my-2 capitalize text-xl bg-gray-200 rounded-md flex items-center">
                                        <img src={info.image} alt={info.name} className="w-32 h-32" />
                                        <span className="mr-2 font-bold">{index + 1}.</span>
                                        <h3>{info.name}</h3>
                                    </a>
                                </Link>
                            </li> </>)

                    })}
                </ul>
            </Layout>
        </div>
    )
}





