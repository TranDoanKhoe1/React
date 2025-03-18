export default function Content() {
    
    return (
        <div className="results">
            <h2>Sorry, no results were found for “cakescascsa”</h2>
            <img src="../public/nothing.png" alt="No results"/>
            <p>We have all your Independence Day sweets covered.</p>
            <div className="suggestions">
                <span style={{color: '#cc6f8e', background: '#fff0f5', borderRadius: '25px'}}>Sweet Cake</span>
                <span style={{color: '#8f79c4', background: '#f4f0fe', borderRadius: '25px'}}>Black Cake</span>
                <span style={{color: '#cc6f8e', background: '#fff0f5', borderRadius: '25px'}} >Pozole Verde</span>
                <span style={{color: '#336d71', background: '#eefcfd', borderRadius: '25px'}} >Healthy Food</span>
            </div>
        </div>
    );
}