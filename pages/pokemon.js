import Link from "next/link"
import Layout from '../components/Layout.js'

export async function getServerSideProps({ query }) {
    try {
        const id = query.id
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemonInfo = await res.json()
        const ModIndex = ("00" + id).slice(-3)
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ModIndex}.png`
        pokemonInfo.image = image


        return {
            props: { pokemonInfo }
        }
    } catch (err) {

        console.error(err)
    }

}




const pokemon = ({ pokemonInfo }) => {
    return (<>
        <Layout title={pokemonInfo.name}>
            <h1 className="text-4xl mb-2 capitalize text-center">{pokemonInfo.name}</h1>
            <img src={pokemonInfo.image} alt={pokemonInfo.name} />
            <p>
            <span className="font-bold ml-2 text-2xl">Weight:{pokemonInfo.weight}</span>
            </p>
            <p>
            <span className="font-bold ml-2 text-2xl">Height:{pokemonInfo.height}</span>
            </p> 
            <h2 className="text-2xl "></h2>


        </Layout>

    </>)






}


export default pokemon
