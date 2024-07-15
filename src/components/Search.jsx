export const Search = ({handleInputChange, city}) => {
    return (
        <div className="input">
            <label htmlFor="cityInput">Enter The City Name:</label><input type="text" name="cityInput" id="cityInput" value={city} onChange={handleInputChange}/>
        </div>
    )
}