import React, { useEffect, useState } from 'react';
import queryString, { ParsedQuery } from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';

import { getRandomInt } from '../helpers/getRandomInt';
// import { getVideo } from '../helpers/getVideo';

import '../styles/Declaration.css';
interface ICoordinates {
  height: number;
  width: number;
}

/**
 * TO DO:
 * 1. Arreglar el boton Si, para que no se mueva de lugar
 */

export const Declaration = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [{ declarationMessage }, setDeclarationMessage] = useState<ParsedQuery<string>>({
    declarationMessage: ''
  });
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    height: 0,
    width: 0
  });

  const { height, width } = coordinates;

  useEffect(() => {
    setDeclarationMessage(queryString.parse(location.search))
  }, [location]);

  const moveButtonRandomly = (): void => {
    // TODO: in smartphone view, the button gets stuck and don't move
    setCoordinates({
      height: getRandomInt(window.innerHeight),
      width: getRandomInt(window.innerWidth)
    })
  }

  const yes = () => {
    navigate('/message');

    // navigate('/message', {
    //   replace: true
    // });
  }

  return (
    <div className='container'>
      {/* <video autoPlay loop muted>
        <source src={ getVideo(`./background_love.mp4`) } type="video/mp4" />
      </video> */}

      <h1 className='title'>{ declarationMessage }</h1>

      <div className='buttons'>
        <button
          onClick={ yes }
          className='btn-yes'
        >Si</button>

        {
          height === 0 && width === 0 ?
            <button
              className='btn-no'
              onMouseOver={ moveButtonRandomly }
            >No</button>
          :
            <button
              className='btn-no'
              style={{
                position: 'absolute',
                top: height,
                right: width
              }}
              onMouseOver={ moveButtonRandomly }
            >No</button>
        }
      </div>
    </div>
    )
}
