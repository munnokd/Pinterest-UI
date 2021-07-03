import './App.css';
import Header from './Header/Header'
import  Main  from './MainBoard/Main';
import unsplash from './api/unsplash'
import { useEffect, useState } from 'react';

function App() {
  const [pins,setPins]=useState([])

  const getImages=(term)=>{
    return unsplash.get('https://api.unsplash.com/search/photos',{
    params:{
      query:term
    }
  })
  };

  const getNewPins=()=>{
    let promises=[];
    let pinData=[];

    let pins =['ocean','tokyo','car','bike','phone','film','computer','laptop','headphone','logo','design'];
    pins.forEach((pinTerm)=>{
      promises.push(
        getImages(pinTerm).then((res)=>{
          let results= res.data.results;

          pinData=pinData.concat(results);
          pinData.sort(function (a,b){
            return 0.5 - Math.random();
          })
        })
      )
    })
    Promise.all(promises).then(()=>{
      setPins(pinData);
    });
  }

  useEffect(()=>{
    getNewPins()
  },[])


  const onSubmit=(term)=>{
    getImages(term).then((res)=>{
      let results=res.data.results;
      let newPins=[
        ...results,
        ...pins,
      ]
      newPins.sort(function(a,b){
        return 0.5 - Math.random();
      })
      setPins(newPins)
    })
  }

  return (
    <div className="app">
      <Header onSearch={onSubmit} />
      <Main pins={pins}/>
    </div>
  );
}

export default App;
