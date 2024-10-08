import './index.css'

const CountryCard = props => {
    const {item} = props
    const {country, description, imageUrl} = item
    return (
        <div className='country-card'>
            <img src={imageUrl} className='country-img' alt={country} />
            <h1 className='country-name'>{country}</h1>
            <p className='country-description'>{description}</p>
        </div>
    )
}

export default CountryCard