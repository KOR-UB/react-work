import React from "react";
import "./jnews.scss";

export default function Jnews() {
  return (
    <div className="jnews-body static-wrap">
      <header>
        <div className="Max1170">
          <h1 className="logo">
            <a href="https://jnews.io/personalplanner/">
              <img
                src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/logo3-1.png"
                alt="Personal Finance 로고"
              />
            </a>
          </h1>
          <form className="search">
            <p>Wednesday, April 1, 2020</p>
            <input
              type="search"
              name="search"
              id="search-input"
              placeholder="Search..."
            />
            <i className="icon-search"></i>
          </form>
        </div>
      </header>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Banking</a>
          </li>
          <li>
            <a href="#!">Investing</a>
          </li>
          <li>
            <a href="#!">Insurance</a>
          </li>
          <li>
            <a href="#!">Retirement</a>
          </li>
          <li>
            <a href="#!">Taxes</a>
          </li>
        </ul>
      </nav>
      <main>
        <section className="row1">
          <h2 className="hidden">섹션 1</h2>
          <div className="imgBx">
            <img
              src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/bruce-mars-cAbdf_gNxH0-unsplash-350x250.jpg"
              alt="4 Ways to Find Income While Waiting for Full Retirement Age"
            />
          </div>
          <div className="contentBx">
            <h2>
              <a href="#!">
                4 Ways to Find Income While Waiting for Full Retirement Age
              </a>
            </h2>
            <div className="details">
              <span>BY</span>
              <a href="#!" className="name">
                JOHN DOE
              </a>
              <a href="#!" className="august">
                <i className="icon-clock"></i> AUGUST 5,2019
              </a>
              <a href="#!">
                <i className="icon-comment-empty"></i>0
              </a>
            </div>
          </div>
          <form className="email">
            <h2>Get daily news updates to your inbox!</h2>
            <p>
              Subscribe to our mailing list to receives daily updates direct to
              your inbox!
            </p>
            <input
              type="email"
              name="email"
              id="Email-input"
              placeholder="Email address..."
            />
            <button>SUBSCRIBE</button>
            <span>100% Privacy. We don't spam</span>
          </form>
        </section>
        <section className="row2">
          <h2 className="hidden">섹션 2</h2>
          <div className="post left">
            <h2>TRENDING POSTS</h2>
            <hr />
            <div className="content">
              <div className="details">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/naassom-azevedo-AcWC8WuCQ_k-unsplash-120x86.jpg"
                  alt="Best Tips: How to Buy a Family Home Without the Stress"
                />
                <div className="group">
                  <h2>
                    <a href="#!">
                      Best Tips: How to Buy a Family Home Without the Stress
                    </a>
                  </h2>
                  <a href="#!" className="august">
                    <i className="icon-clock"></i> AUGUST 5, 2019
                  </a>
                </div>
              </div>
              <div className="details">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/artem-beliaikin-belart84-e-geRd5eCQ-unsplash-120x86.jpg"
                  alt="How to Prepare Your Money for the Coming Economic Slowdown"
                />
                <div className="group">
                  <h2>
                    <a href="#!">
                      How to Prepare Your Money for the Coming Economic Slowdown
                    </a>
                  </h2>
                  <a href="#!" className="august">
                    <i className="icon-clock"></i> AUGUST 5, 2019
                  </a>
                </div>
              </div>
              <div className="details">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/sarah-shaffer-O3gOgPB4sRU-unsplash-1-120x86.jpg"
                  alt="4 Reasons Why You Should Read Your Bill Every Month"
                />
                <div className="group">
                  <h2>
                    <a href="#!">
                      4 Reasons Why You Should Read Your Bill Every Month
                    </a>
                  </h2>
                  <a href="#!" className="august">
                    <i className="icon-clock"></i> AUGUST 5, 2019
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="post right">
            <h2>EDITOR PICK'S</h2>
            <hr />
            <div className="content">
              <div className="details">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/helloquence-5fNmWej4tAA-unsplash-120x86.jpg"
                  alt="Should You Stop Saving and Investing When Paying Off Debt?"
                />
                <div className="group">
                  <h2>
                    <a href="#!">
                      Should You Stop Saving and Investing When Paying Off Debt?
                    </a>
                  </h2>
                  <a href="#!" className="august">
                    <i className="icon-clock"></i> AUGUST 5, 2019
                  </a>
                </div>
              </div>
              <div className="details">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/neonbrand-dDvrIJbSCkg-unsplash-120x86.jpg"
                  alt="Study: Wealthy People Are Mean, Entitled, and Narcissistic"
                />
                <div className="group">
                  <h2>
                    <a href="#!">
                      Study: Wealthy People Are Mean, Entitled, and Narcissistic
                    </a>
                  </h2>
                  <a href="#!" className="august">
                    <i className="icon-clock"></i> AUGUST 5, 2019
                  </a>
                </div>
              </div>
              <div className="details">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/kelly-sikkema-wgcUx0kR1ps-unsplash-120x86.jpg"
                  alt="Three of the Toughest Decisions You’ll Face in Retirement"
                />
                <div className="group">
                  <h2>
                    <a href="#!">
                      Three of the Toughest Decisions You’ll Face in Retirement
                    </a>
                  </h2>
                  <a href="#!" className="august">
                    <i className="icon-clock"></i> AUGUST 5, 2019
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row3">
          <h2 className="hidden">섹션 3</h2>
          <div className="card left">
            <h2 className="title">BANKING</h2>
            <hr />
            <div className="topBx">
              <div className="imgBx">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/mariia-chalaya-aODtyhXEAjg-unsplash-350x250.jpg"
                  alt="How to Do a Reconnaissance Trip Before Retiring Overseas"
                />
              </div>
              <h2 className="caption">
                <a href="#!">
                  How to Do a Reconnaissance Trip Before Retiring Overseas
                </a>
              </h2>
              <div className="details">
                <span>BY</span>
                <a href="#!" className="name">
                  JOHN DOE
                </a>
                <a href="#!" className="august">
                  <i className="icon-clock"></i> AUGUST 5,2019
                </a>
                <a href="#!">
                  <i className="icon-comment-empty"></i>0
                </a>
              </div>
            </div>
            <div className="downBx">
              <img
                src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/nik-macmillan-YXemfQiPR_E-unsplash-120x86.jpg"
                alt="Best Tips: Things You Can Learn From Your Tax Return"
              />
              <div className="group">
                <h2>
                  <a href="#!">
                    Best Tips: Things You Can Learn From Your Tax Return
                  </a>
                </h2>
                <a href="#!" className="august">
                  <i className="icon-clock"></i> AUGUST 5, 2019
                </a>
              </div>
            </div>
            <div className="downBx">
              <img
                src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/kelly-sikkema-G_91H-3qZOA-unsplash-120x86.jpg"
                alt="What You Need to Know About Canceled Debt and Taxes"
              />
              <div className="group">
                <h2>
                  <a href="#!">
                    What You Need to Know About Canceled Debt and Taxes
                  </a>
                </h2>
                <a href="#!" className="august">
                  <i className="icon-clock"></i> AUGUST 5, 2019
                </a>
              </div>
            </div>
          </div>
          <div className="card center">
            <h2 className="title">INVESTING</h2>
            <hr />
            <div className="topBx">
              <div className="imgBx">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/elien-dumon-zdvrozV4Lr8-unsplash-350x250.jpg"
                  alt="5 Surefire Ways to Maintain a Good Credit Score in Retirement"
                />
              </div>
              <h2 className="caption">
                <a href="#!">
                  5 Surefire Ways to Maintain a Good Credit Score in Retirement
                </a>
              </h2>
              <div className="details">
                <span>BY</span>
                <a href="#!" className="name">
                  JOHN DOE
                </a>
                <a href="#!" className="august">
                  <i className="icon-clock"></i> AUGUST 5,2019
                </a>
                <a href="#!">
                  <i className="icon-comment-empty"></i>0
                </a>
              </div>
            </div>
            <div className="downBx">
              <img
                src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/eepeng-cheong-PPmr3NDxhsM-unsplash-120x86.jpg"
                alt="Best Tips: How Much You Should Spend in Retirement"
              />
              <div className="group">
                <h2>
                  <a href="#!">
                    Best Tips: How Much You Should Spend in Retirement
                  </a>
                </h2>
                <a href="#!" className="august">
                  <i className="icon-clock"></i> AUGUST 5, 2019
                </a>
              </div>
            </div>
            <div className="downBx">
              <img
                src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/markus-spiske-5gGcn2PRrtc-unsplash-120x86.jpg"
                alt="2017 Federal Income Tax Brackets and Marginal Rates"
              />
              <div className="group">
                <h2>
                  <a href="#!">
                    2017 Federal Income Tax Brackets and Marginal Rates
                  </a>
                </h2>
                <a href="#!" className="august">
                  <i className="icon-clock"></i> AUGUST 5, 2019
                </a>
              </div>
            </div>
          </div>
          <div className="card right">
            <h2 className="title">INSURANCE</h2>
            <hr />
            <div className="topBx">
              <div className="imgBx">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/alexander-mils-lCPhGxs7pww-unsplash-350x250.jpg"
                  alt="The Easiest Way to Invest in World’s Biggest Companies"
                />
              </div>
              <h2 className="caption">
                <a href="#!">
                  The Easiest Way to Invest in World’s Biggest Companies
                </a>
              </h2>
              <div className="details">
                <span>BY</span>
                <a href="#!" className="name">
                  JOHN DOE
                </a>
                <a href="#!" className="august">
                  <i className="icon-clock"></i> AUGUST 5,2019
                </a>
                <a href="#!">
                  <i className="icon-comment-empty"></i>0
                </a>
              </div>
            </div>
            <div className="downBx">
              <img
                src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/mathieu-turle-uJm-hfuCHm4-unsplash-120x86.jpg"
                alt="Want Your Investments Better? Stop Watching the News"
              />
              <div className="group">
                <h2>
                  <a href="#!">
                    Want Your Investments Better? Stop Watching the News
                  </a>
                </h2>
                <a href="#!" className="august">
                  <i className="icon-clock"></i> AUGUST 5, 2019
                </a>
              </div>
            </div>
            <div className="downBx">
              <img
                src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/allef-vinicius-fJTqyZMOh18-unsplash-120x86.jpg"
                alt="My Business Bank Accounts: Checking and Savings"
              />
              <div className="group">
                <h2>
                  <a href="#!">
                    My Business Bank Accounts: Checking and Savings
                  </a>
                </h2>
                <a href="#!" className="august">
                  <i className="icon-clock"></i> AUGUST 5, 2019
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="row4">
          <h2 className="hidden">섹션 4</h2>
          <h2 className="title">PETIREMENT</h2>
          <hr />
          <div className="content">
            <div className="imgBx">
              <img
                src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/william-iven-dAmHWsRYP9c-unsplash-350x250.jpg"
                alt="Here’s How Your Taxes Will Change After You Have a Kid"
              />
            </div>
            <div className="caption">
              <h2>
                <a href="#!">
                  Here’s How Your Taxes Will Change After You Have a Kid
                </a>
              </h2>
              <div className="details">
                <span>BY</span>
                <a href="#!" className="name">
                  JOHN DOE
                </a>
                <a href="#!" className="august">
                  <i className="icon-clock"></i> AUGUST 5,2019
                </a>
                <a href="#!">
                  <i className="icon-comment-empty"></i>0
                </a>
              </div>
            </div>
            <div className="detailsBx">
              <div className="Bx">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/kelly-sikkema-tQQ4BwN_UFs-unsplash-120x86.jpg"
                  alt="Would You Rather Receive a Refund or Owe More Taxes?"
                />
                <div className="group">
                  <h2>
                    <a href="#!">
                      Would You Rather Receive a Refund or Owe More Taxes?
                    </a>
                  </h2>
                  <a href="#!" className="august">
                    <i className="icon-clock"></i> AUGUST 5, 2019
                  </a>
                </div>
              </div>
              <div className="Bx">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/adeolu-eletu-unRkg2jH1j0-unsplash-120x86.jpg"
                  alt="11 Investing Tips You Wish Could Tell Your Younger Self"
                />
                <div className="group">
                  <h2>
                    <a href="#!">
                      11 Investing Tips You Wish Could Tell Your Younger Self
                    </a>
                  </h2>
                  <a href="#!" className="august">
                    <i className="icon-clock"></i> AUGUST 5, 2019
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row5">
          <h2 className="hidden">섹션 5</h2>
          <h2 className="title">TAXES</h2>
          <hr />
          <div className="content">
            <div className="imgBx">
              <img
                src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/hunters-race-MYbhN8KaaEc-unsplash-350x250.jpg"
                alt="A New Bank of America Perk: Free Museum Passes"
              />
            </div>
            <div className="caption">
              <h2>
                <a href="#!">A New Bank of America Perk: Free Museum Passes</a>
              </h2>
              <div className="details">
                <span>BY</span>
                <a href="#!" className="name">
                  JOHN DOE
                </a>
                <a href="#!" className="august">
                  <i className="icon-clock"></i> AUGUST 5,2019
                </a>
                <a href="#!">
                  <i className="icon-comment-empty"></i>0
                </a>
              </div>
            </div>
            <div className="detailsBx">
              <div className="Bx">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/markus-spiske-3Tf1J8q9bBA-unsplash-120x86.jpg"
                  alt="The Secret to Successful Investing Is Trusting Process"
                />
                <div className="group">
                  <h2>
                    <a href="#!">
                      The Secret to Successful Investing Is Trusting Process
                    </a>
                  </h2>
                  <a href="#!" className="august">
                    <i className="icon-clock"></i> AUGUST 5, 2019
                  </a>
                </div>
              </div>
              <div className="Bx">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/daria-shevtsova-k_RYBedEvDw-unsplash-120x86.jpg"
                  alt="How an Exit Strategy Can Make You a Better Investor"
                />
                <div className="group">
                  <h2>
                    <a href="#!">
                      How an Exit Strategy Can Make You a Better Investor
                    </a>
                  </h2>
                  <a href="#!" className="august">
                    <i className="icon-clock"></i> AUGUST 5, 2019
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row6">
          <h2 className="hidden">섹션 6</h2>
          <h2 className="title">MOST POPULAR</h2>
          <hr />
          <div className="container">
            <figure>
              <div className="imgBx bank">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/naassom-azevedo-AcWC8WuCQ_k-unsplash-360x180.jpg"
                  alt="Best Tips: How to Buy a Family Home Without the Stress"
                />
              </div>
              <figcaption>
                <a href="#!">
                  Best Tips: How to Buy a Family Home Without the Stress
                </a>
              </figcaption>
              <a href="#!" className="august">
                <i className="icon-clock"></i> AUGUST 5, 2019
              </a>
            </figure>
            <figure className="center">
              <div className="imgBx bank">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/artem-beliaikin-belart84-e-geRd5eCQ-unsplash-360x180.jpg"
                  alt="How to Prepare Your Money for the Coming Economic Slowdown"
                />
              </div>
              <figcaption>
                <a href="#!">
                  How to Prepare Your Money for the Coming Economic Slowdown
                </a>
              </figcaption>
              <a href="#!" className="august">
                <i className="icon-clock"></i> AUGUST 5, 2019
              </a>
            </figure>
            <figure>
              <div className="imgBx bank">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/sarah-shaffer-O3gOgPB4sRU-unsplash-1-360x180.jpg"
                  alt="4 Reasons Why You Should Read Your Bill Every Month"
                />
              </div>
              <figcaption>
                <a href="#!">
                  4 Reasons Why You Should Read Your Bill Every Month
                </a>
              </figcaption>
              <a href="#!" className="august">
                <i className="icon-clock"></i> AUGUST 5, 2019
              </a>
            </figure>
            <figure>
              <div className="imgBx insurance">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/helloquence-5fNmWej4tAA-unsplash-360x180.jpg"
                  alt="Should You Stop Saving and Investing When Paying Off Debt?"
                />
              </div>
              <figcaption>
                <a href="#!">
                  Should You Stop Saving and Investing When Paying Off Debt?
                </a>
              </figcaption>
              <a href="#!" className="august">
                <i className="icon-clock"></i> AUGUST 5, 2019
              </a>
            </figure>
            <figure className="center">
              <div className="imgBx insurance">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/neonbrand-dDvrIJbSCkg-unsplash-360x180.jpg"
                  alt="Study: Wealthy People Are Mean, Entitled, and Narcissistic"
                />
              </div>
              <figcaption>
                <a href="#!">
                  Study: Wealthy People Are Mean, Entitled, and Narcissistic
                </a>
              </figcaption>
              <a href="#!" className="august">
                <i className="icon-clock"></i> AUGUST 5, 2019
              </a>
            </figure>
            <figure>
              <div className="imgBx insurance">
                <img
                  src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/kelly-sikkema-wgcUx0kR1ps-unsplash-360x180.jpg"
                  alt="Three of the Toughest Decisions You’ll Face in Retirement"
                />
              </div>
              <figcaption>
                <a href="#!">
                  Three of the Toughest Decisions You’ll Face in Retirement
                </a>
              </figcaption>
              <a href="#!" className="august">
                <i className="icon-clock"></i> AUGUST 5, 2019
              </a>
            </figure>
          </div>
          <div className="btnBx">
            <button className="first">1</button>
            <button>2</button>
            <span>...</span>
            <button>5</button>
            <button>&gt;</button>
          </div>
        </section>
      </main>
      <footer>
        <div className="Max1170">
          <div className="item about">
            <a href="#!">
              <img
                src="https://jnews.io/personalplanner/wp-content/uploads/sites/72/2019/07/logo3-1.png"
                alt="JNews Personal Planner"
              />
            </a>
            <p>
              We bring you the best Premium WordPress Themes that perfect for
              news, magazine, personal blog, etc. Check our landing page for
              details.
            </p>
          </div>
          <div className="item categories">
            <h2>Categories</h2>
            <ul>
              <li>
                <a href="#!">Banking</a>
              </li>
              <li>
                <a href="#!">Investing</a>
              </li>
              <li>
                <a href="#!">Taxes</a>
              </li>
              <li>
                <a href="#!">Insurance</a>
              </li>
              <li>
                <a href="#!">Retirement</a>
              </li>
            </ul>
            <p>Follow us on social media</p>
            <div className="snsBx">
              <i className="icon-facebook"></i>
              <i className="icon-twitter"></i>
              <i className="icon-instagram"></i>
              <i className="icon-youtube-play"></i>
              <i className="icon-rss"></i>
            </div>
          </div>
          <div className="item news">
            <h2>Recent News</h2>
            <a href="#!">
              Best Tips: How to Buy a Family Home Without the Stress
            </a>
            <a href="#!">
              How to Prepare Your Money for the Coming Economic Slowdown
            </a>
            <a href="#!">4 Reasons Why You Should Read Your Bill Every Month</a>
          </div>
          <div className="addressBx">
            <address>
              <p className="copyright">
                © 2020{" "}
                <a href="#!" title="Premium WordPress news & magazine theme">
                  JNews
                </a>{" "}
                - Premium WordPress news & magazine theme by{" "}
                <a href="#!" title="Jegtheme">
                  Jegtheme.
                </a>
              </p>
            </address>
            <ul>
              <li>
                <a href="#!">Home</a>
                <span>/</span>
              </li>
              <li>
                <a href="#!">Banking</a>
                <span>/</span>
              </li>
              <li>
                <a href="#!">Investing</a>
                <span>/</span>
              </li>
              <li>
                <a href="#!">Insurance</a>
                <span>/</span>
              </li>
              <li>
                <a href="#!">Retirement</a>
                <span>/</span>
              </li>
              <li>
                <a href="#!">Taxes</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
