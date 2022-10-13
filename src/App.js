import Weather from './components/Weather'
import Date from './components/Date'
import Time from './components/Time'
import Quote from './components/Quote'


const style = {
  wrapper:`w-full h-screen flex flex-col justify-between `,
  topSection:`flex justify-between w-full `,
  weather: `text-center`,
  date:`flex items-center justify-center`,
  middleSection: `flex justify-center text-center align-center flex-col h-full`,
  bottomSection: `flex justify-center flex-col text-center`,

}

function App() {
  return (
    <div className="App">
      <div className={style.wrapper}>

        <section className={style.topSection}>
            <div className={style.weather}>
              <Weather/>
            </div>
            <div className={style.date}>
              <Date />
            </div>
        </section>

          <section className={style.middleSection}>
              <Time/>
          </section>

          <section className={style.bottomSection}>
              <Quote />
          </section>

      </div>
    </div>
  );
}

export default App;
