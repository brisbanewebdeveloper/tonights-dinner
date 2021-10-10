
// import logo from './logo.svg';
import './App.scss';

import { Categories, Menus } from './Data';
import FoodItems from './FoodItems';

function App() {
  return (
    <div className="container">

      <header className="row">

        <h1 className="text-center">
          今夜の夜食
        </h1>

      </header>

      <main className="row">

        <div className="col-12 col-md-6 food-group">
          <FoodItems
            category={Categories.Washoku}
            foods={Menus.WashokuMenus}
          />
        </div>

        <div className="col-12 col-md-6">
          <div className="food-group">
            <FoodItems
              category={Categories.Kankoku}
              foods={Menus.KankokuMenus}
            />
          </div>
          <div className="food-group">
            <FoodItems
              category={Categories.Chuka}
              foods={Menus.ChukaMenus}
            />
          </div>
          <div className="food-group">
            <FoodItems
              category={Categories.Yoshoku}
              foods={Menus.YoshokuMenus}
            />
          </div>
        </div>

        <div className="col-12 col-md-6 food-group">
          <FoodItems
            category={Categories.Hukusai}
            foods={Menus.HukusaiMenus}
          />
        </div>

        <div className="col-12 col-md-3 food-group">
          <FoodItems
            category={Categories.Soup}
            foods={Menus.SoupMenus}
          />
        </div>
        <div className="col-12 col-md-3 food-group">
          <FoodItems
            category={Categories.Salad}
            foods={Menus.SaladMenus}
          />
        </div>

      </main>

    </div>
  );
}

export default App;
