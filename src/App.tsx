
// import logo from './logo.svg';
import './App.css';

import { Categories, Menus } from './Data';
import FoodItems from './FoodItems';

function App() {
  return (
    <div className="container mx-auto px-4">

      <header className="flex flex-wrap">

        <h1 className="text-center w-full text-2xl font-bold">
          今夜の夜食
        </h1>

      </header>

      <main className="flex flex-wrap -mx-2">

        <div className="w-full md:w-1/2 px-2 mb-4">
          <FoodItems
            category={Categories.Washoku}
            foods={Menus.WashokuMenus}
          />
        </div>

        <div className="w-full md:w-1/2 px-2">
          <div className="mb-4">
            <FoodItems
              category={Categories.Kankoku}
              foods={Menus.KankokuMenus}
            />
          </div>
          <div className="mb-4">
            <FoodItems
              category={Categories.Chuka}
              foods={Menus.ChukaMenus}
            />
          </div>
          <div className="mb-4">
            <FoodItems
              category={Categories.Yoshoku}
              foods={Menus.YoshokuMenus}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 px-2 mb-4">
          <FoodItems
            category={Categories.Hukusai}
            foods={Menus.HukusaiMenus}
          />
        </div>

        <div className="w-full md:w-1/4 px-2 mb-4">
          <FoodItems
            category={Categories.Soup}
            foods={Menus.SoupMenus}
          />
        </div>
        <div className="w-full md:w-1/4 px-2 mb-4">
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
