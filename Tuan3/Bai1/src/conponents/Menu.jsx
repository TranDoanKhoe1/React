export default function Menu() {
    return (
        <>
                <div className="logo">
                    <img src="../public/chefify.png" alt
                    ="logo"/>
                </div>
                <div class="search-box">
                    <i class="fa fa-search"></i>
                    <input type="text" placeholder="Tìm kiếm..." value={'cakescascsa'}/>
                </div>
                <nav className="nav">
                    <a href="#">What to cook</a>
                    <a href="#">Recipes</a>
                    <a href="#">Ingredients</a>
                    <a href="#">Occasions</a>
                    <a href="#">About Us</a>
                </nav>
                
                <button class="recipe-box"><img src="../public/check.png"></img>Your Recipe Box</button>
                
                <div class="avatar">
                    <img src="../public/avatar.png"></img>
                </div>
        </>
    );
}