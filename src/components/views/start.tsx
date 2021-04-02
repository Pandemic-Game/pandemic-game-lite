import React, { useEffect } from "react";
import EndCoronaVirusLogo from "../../assets/PNG/ecvlogo.png";
import GameLogo from "../../assets/SVG/gamelogo.svg";
import { Img } from "../../ImageCache";
import { useThemeContext } from "../../ThemeProvider";
import * as Btn from "../buttons";
import * as Txt from "../text";
import * as Lines from "../lines";

export function Splash(props: { onClick: Function }) {
  const bgColorClass = "bg-yellow-400";
  const context = useThemeContext();

  useEffect(() => {
    context.changeBgColorClass(bgColorClass);
  });

  return (
    <div
      className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}
    >
      <div className="m-2">
        <a
          href="https://www.endcoronavirus.org"
          rel="noreferrer"
          target="_blank"
          className="text-blue-900"
        >
          <Img
            src={EndCoronaVirusLogo}
            alt="EndCoronaVirusLogo"
            className="m-2 w-auto h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 rounded-lg"
          />
        </a>
      </div>
      <div
        className="m-2 flex m-2 flex-col justify-center text-center items-center"
        style={{ marginTop: "auto" }}
      >
        <Img
          src={GameLogo}
          alt="GameLogo"
          className="m-2 w-auto h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-52"
          Made
          with
          real
          models
        />
        <Txt.Subtitle
          value={"A five minute game to return to normality."}
          col="black"
        />
        <br></br>
        <Txt.Text
          value="How would you end COVID-19 restrictions?"
          col="black"
        />
        <Txt.Text
          value="Lead your country, navigate the first few months of 2021 and find out."
          col="black"
        />
      </div>

      <Btn.Bouncy
        value="Play the game"
        bg="purple-900"
        col="white"
        onClick={props.onClick}
      />
    </div>
  );
}

export function Introduction(props: {
  onClick: {
    continue: Function;
    source: Function;
    data: Function;
  };
}) {
  const bgColorClass = "bg-yellow-400";
  const context = useThemeContext();
  useEffect(() => {
    context.changeBgColorClass(bgColorClass);
  });

  return (
    <div className={`min-h-full p-2 flex flex-col items-center text-center ${bgColorClass}`}>
      <Txt.Title value="How to play" col="gray-900" />
      <br/>
      <Txt.Subtitle value="Your goal" col="black" />
      <Txt.Text value="End COVID-19 restrictions!" col="black" />
      <br/>
      <Txt.Subtitle value="How? Navigate a few events.." col="black" />
      <Txt.Text value="You will have a limited choice of responses (you won't be able to change society all at once!)" col="black" />
      <br/>
      <Txt.Subtitle value=".. but be careful!" col="black" />
      <Txt.Text value="One wrong step can put you in an out-of-control situation with no good choices available!" col="black" />
      <br/>
      <div className="p-4 flex flex-col justify-center items-center">
        <Txt.Subtitle value={`Made with real models`} col="black" />
        <Btn.Sneaky onClick={props.onClick.data} type='wannaSeeModel' bg='green-400' col='black' />
      </div>
      <Btn.Rounded
        value="Start"
        bg="purple-900"
        col="white"
        onClick={props.onClick.continue}
      />
    </div>
  );
}

export function Data(props: {
  onClick: {
    back: Function;
    source: Function;
  };
}) {
  const bgColorClass = "bg-purple-900";
  const context = useThemeContext();

  useEffect(() => {
    context.changeBgColorClass(bgColorClass);
  });

  return (
    <div
      className={`min-h-full p-2 flex flex-col justify-between items-center ${bgColorClass}`}
    >
      <Txt.Title value={"How our data model works:"} col="white" />
      <div className="p-2 m-2 flex flex-col justify-start items-start text-white font-medium font-sans">
        <Txt.Paragraph
          col="white"
          value={`
            We are transparent with our data so that you can make your own conclusions from this game.
            Your actions will affect different parts of society differently:
          `}
        />
        <Txt.Subtitle value={"Public support"} col="white" />
        <h5 className="text-yellow-500">Is affected by:</h5>
        <div className="p-2 flex flex-row items-center">
          <Btn.ViewSource
            sourceDetails={{
              sourceName: "YouGov",
              link: "https://yougov.co.uk",
              description:
                "We use survey data from YouGov (a global public opinion and data company). They conduct surveys on public opinions including reactions to new policies.",
            }}
            onClick={props.onClick.source}
          />
          <p>
            How much of the public agrees that a policy should be implemented
          </p>
        </div>
        <div className="p-2 flex flex-row items-center">
          <Btn.ViewSource
            sourceDetails={{
              sourceName: "Wiki",
              link: "https://en.wikipedia.org/wiki/Sunk_cost",
              description:
                "The longer restrictions continue the harder people will find it to cope (lockdown fatigue). Additionally, once people have invested in a course of action they resist changing their mind (sunk cost fallacy: for more info see link). These phenomena affect how much people support implementing and continuing restrictions.",
            }}
            onClick={props.onClick.source}
          />
          <p>
            Psychological effects of 'lockdown fatigue' and the 'sunk cost
            fallacy'
          </p>
        </div>
        <Lines.Hr my={4} col="white" />

        <div className="w-full flex flex-row justify-between">
          <Txt.Subtitle value={"COVID-19 cases"} col="white" />
          <a
            className="text-yellow-200"
            href="http://pandemic-game-prod.s3-website.us-east-2.amazonaws.com"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className={`p-1 rounded-lg bg-yellow-500 text-md text-black font-custom`}
            >
              View data model
            </button>
          </a>
        </div>
        <h5 className="text-yellow-500">Is affected by:</h5>
        <div className="p-2 flex flex-row items-center">
          <Btn.ViewSource
            sourceDetails={{
              sourceName: "EpidemicForecasting.Org",
              link: "http://epidemicforecasting.org",
              description:
                "EpidemicForecasting.org gives estimates for how much policies affect the R value. It was created by a team of researchers from organisations including Oxford and Harvard.",
            }}
            onClick={props.onClick.source}
          />
          <p>
            Restriction policies put in place to reduce the rate of infection
          </p>
        </div>
        <div className="p-2 flex flex-row items-center">
          <Btn.ViewSource
            sourceDetails={{
              sourceName: "Our data model",
              link:
                "https://github.com/felix19350/pandemic-game-narrative-poc/blob/feature/integrated-simulator/src/scenarios/UK.ts",
              description:
                "In our data model for cases and economy we make the assumption that once hospital capacity is reached individuals start self-isolating even if the government has not issued lockdown.",
            }}
            onClick={props.onClick.source}
          />
          <p>
            When cases are extremely high people will become scared and
            self-isolate
          </p>
        </div>
        <Lines.Hr my={4} col="white" />

        <div className="w-full flex flex-row justify-between">
          <Txt.Subtitle value={"Economy"} col="white" />
          <a
            className="text-yellow-200"
            href="http://pandemic-game-prod.s3-website.us-east-2.amazonaws.com"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className={`p-1 rounded-lg bg-yellow-500 text-md text-black font-custom`}
            >
              View data model
            </button>
          </a>
        </div>
        <h5 className="text-yellow-500">Is affected by:</h5>
        <div className="p-2 flex flex-row items-center">
          <Btn.ViewSource
            sourceDetails={{
              sourceName: "The Spectator",
              link:
                "https://www.spectator.co.uk/article/the-true-cost-of-coronavirus-on-our-economy",
              description:
                "Estimates place the cost of lockdown on the economy around 20-30% of the usual business income",
            }}
            onClick={props.onClick.source}
          />
          <p>The cost of lost business revenue</p>
        </div>
        <div className="p-2 flex flex-row items-center">
          <Btn.ViewSource
            sourceDetails={{
              sourceName: "Imperial College Business School",
              link:
                "https://voxeu.org/article/uk-lockdown-balancing-costs-against-benefits",
              description:
                "20% of cases result in hospitalisations and 1% result in a mortality. The cost of a quality life year is £30,000 so each early death due to COVID-19 costs the economy as well as the medical costs for treating COVID-19 patients.",
            }}
            onClick={props.onClick.source}
          />
          <p>
            The costs of hospitalisations and mortalities as a result of
            COVID-19
          </p>
        </div>
      </div>

      <Btn.Rounded
        value={"Back to the game"}
        col="gray-900"
        bg="yellow-500"
        onClick={() => {
          props.onClick.back();
        }}
        animate="bounce"
      />
    </div>
  );
}
