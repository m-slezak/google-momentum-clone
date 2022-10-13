
const style = {
  wrapper:`w-full h-screen flex flex-col justify-between `,
  topSection:`flex justify-between w-full `,
  weather: `text-center`,
  date:`flex items-center justify-center `,
  middleSection: `flex justify-center text-center align-center flex-col h-full`,
  bottomSection: `flex justify-center flex-col text-center`,

}

function App() {
  return (
    <div className="App">
      <div className={style.wrapper}>

        <section className={style.topSection}>
            <div className={style.weather}>
              <p>Dallas</p>
              <p>22°</p>
            </div>

            <div className={style.date}>
              <p>11.10.2022</p>
            </div>
        </section>

          <section className={style.middleSection}>

                  <p>time</p>
                  <p>Welcome Welcome Welcome Welcome Welcome</p>

          </section>

          <section className={style.bottomSection}>
                  <p>quote</p>
                  <p>Author</p>
          </section>



      </div>

    </div>
  );
}

export default App;
