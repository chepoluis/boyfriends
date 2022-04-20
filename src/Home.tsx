import { useLayoutEffect, useState } from "react";
import { getRandomInt } from './helpers/getRandomInt';

import './Home.css';

interface ICoordinates {
  height: number;
  width: number;
}

const Home = () => {
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    height: 0,
    width: 0
  })

  const { height, width } = coordinates;

  useLayoutEffect(() => {
    console.log('window.innerHeight: ', height);
    console.log('window.innerWidth: ', width);
  }, [height, width]);

  const moveButtonRandomly = (): void => {
    // TODO: in smartphone view, the button gets stuck and don't move
    setCoordinates({
      height: getRandomInt(window.innerHeight),
      width: getRandomInt(window.innerWidth)
    })
  }

/**
 * TO DO: crear rutas y tomar los valores del mensaje de ahi
 */

  return (
    <div className="form-container">
      <form className="register-form">
        <input 
          id="declaration-message"
          className="form-field"
          type="text"
          placeholder="Write a message for your crush"
          name="declarationMessage"
          value="¿Quieres ser mi novia?"
        />

        <button className="form-field" type="submit">
          Create link
        </button>
      </form>
    </div>
    // <div className="home">
    //   <h2>Hola :D</h2>

    //   <button
    //     style={{
    //       position: 'absolute',
    //       top: height,
    //       right: width
    //     }}
    //     onMouseOver={ moveButtonRandomly }
    //   >No</button>
    // </div>
  );
}

export default Home;
