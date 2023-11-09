/* eslint-disable react/prop-types */
import Pet from "./Pet";

// eslint-disable-next-line react/prop-types
const Results = ({ pets }) => {
    return (
        <div className="search">
            {!pets.length ? (<h1>No Pets Found</h1>) : (pets.map((pet) => {
                return (
                    <Pet
                        animal={pet.animal}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id}
                    />
                )
            }))}
        </div>
    )
}
export default Results