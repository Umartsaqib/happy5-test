import './App.css';

function App() {
  return (
    <div>
      <div className="sidenav">
        <img src="assets/logo.png" alt="" className='logo'/>
      </div>
      <div className="container">
        <div className="header">
          <p className='header-font'>Product Roadmap</p>
        </div>
        <div className="main">
          {/* card 1 */}
          <div className="card">
            <div className="padding-wrap">
              <p className='font-title'>Q1 2019</p>
              <p className='font-title2'>January - March</p>
              <div className="pt-16">
                <div className="sec-card">
                  <p className='font-2'>Re-designed the zero-g doggie bags. No more spills!</p>
                  <div className="row">
                    <div className='test'>
                    <img src="assets/weight.png" alt="" className='icon-weight'/>
                    <p className='font-num'>64%</p>
                    </div>
                    <img src="assets/more-grey.png" alt="" className='icon-more'/>
                  </div>
                </div>
              </div>
              <div className="pt-12">
                <div className="sec-card">
                  <p className='font-2'>Travel & Relocation Support</p>
                  <div className="row">
                    <div className='test'>
                    <img src="assets/weight.png" alt="" className='icon-weight'/>
                    <p className='font-num'>12%</p>
                    </div>
                    <img src="assets/more-grey.png" alt="" className='icon-more'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <div className="button-task">
                <img src="assets/plus-purple.png" alt="" className='icon-plus'/>
                <p className='font-2-pl'>Create new task</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="card">
            <div className="padding-wrap">
              <p className='font-title'>Q2 2019</p>
              <p className='font-title2'>April - June </p>
              <div className="pt-24">
                <p className='font-3'>No Task Available</p>
              </div>
            </div>
            <div className="pt-8">
              <div className="button-task">
                <img src="assets/plus-purple.png" alt="" className='icon-plus'/>
                <p className='font-2-pl'>Create new task</p>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="card">
            <div className="padding-wrap">
              <p className='font-title'>Q3 2019</p>
              <p className='font-title2'>July - September</p>
              <div className="pt-16">
                <div className="sec-card">
                  <p className='font-2'>Bundle interplanetary analytics for improved transmission</p>
                  <div className="row">
                    <div className='test'>
                    <img src="assets/weight.png" alt="" className='icon-weight'/>
                    <p className='font-num'>90%</p>
                    </div>
                    <img src="assets/more-grey.png" alt="" className='icon-more'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <div className="button-task">
                <img src="assets/plus-purple.png" alt="" className='icon-plus'/>
                <p className='font-2-pl'>Create new task</p>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="card">
            <div className="padding-wrap">
              <p className='font-title'>Q4 2019</p>
              <p className='font-title2'>October - December</p>
              <div className="pt-16">
                <div className="sec-card">
                  <p className='font-2'>Data Migration: Performance & Culture End Game</p>
                  <div className="row">
                    <div className='test'>
                    <img src="assets/weight.png" alt="" className='icon-weight'/>
                    <p className='font-num'>63%</p>
                    </div>
                    <img src="assets/more-grey.png" alt="" className='icon-more'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <div className="button-task">
                <img src="assets/plus-purple.png" alt="" className='icon-plus'/>
                <p className='font-2-pl'>Create new task</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
