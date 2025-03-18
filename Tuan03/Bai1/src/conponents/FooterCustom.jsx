export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-Left" style={{width: "50%", paddingLeft: "30px"}}>
                <p style={{fontWeight: 'bold'}}>About Us</p>
                <p>Welcome to our website, a wonderful place to explore and learn how to <br/> cook lide a pro.</p>
                <form className="send-container" style={{marginBottom: '100px'}}>
                    <input style={{float: 'left', backgroundColor: 'white', borderRadius: '10px', width: '400px'}} type="text" placeholder="Enter your email"/>
                    <button style={{float: 'left', marginLeft: '20px', backgroundColor: 'hotpink'}}>Send</button>
                </form>
                <br/>
                <br/>
                <div className="social" style={{display: 'flex', alignItems: 'center'}}>
                    <img src="../public/chefifywhite.png" alt="facebook" style={{marginRight: '10px'}}/>
                    <span>
                        <a style={{color: 'white', marginLeft: '10px'}} href="#">2025 Chefify Company</a>
                    </span>
                    <span>
                        <a style={{color: 'white', marginLeft: '10px'}} href="#">Terms of Service | Privacy Policy</a>
                    </span>
                </div>
            </div>
            <div className="footer-Center" style={{width: "25%"}}>
                <h4>Learn More</h4>
                <a href="#">Our Cooks</a><br/>
                <a href="#">See Our Features</a><br/>
                <a href="#">FAQ</a><br/>
                <br/>
                <h4>Shop</h4>
                <a href="#">Gift Subscription</a><br/>
                <a href="#">Send Us Feedback</a><br/>
                <br/>
            </div>
            <div className="footer-Right" style={{width: "25%"}}>
            <h4>Recipes</h4>
            <a href="#">What to Cook This Week</a><br/>
            <a href="#">Pasta</a><br/>
            <a href="#">Dinner</a><br/>
            <a href="#">Healthy</a><br/>
            <a href="#">Vegetarian</a><br/>
            <a href="#">Vegan</a><br/>
            <a href="#">Christmas</a><br/>
            </div>
        </div>
    );
}