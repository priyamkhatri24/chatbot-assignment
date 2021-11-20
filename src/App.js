import React, { useState, useEffect, useRef } from "react";
import classes from "./App.module.css";
import WebViewer from "@pdftron/pdfjs-express-viewer";
import Container from "./components/Container/container.js";
import Header from "./components/Header/header";
import FrequentlyAsked from "./components/frequentlyAsked/frequentlyAsked";
import Questions from "./components/questionCards/questionCard";
import Robo from "./components/robotIcon/robo";
import Footer from "./components/Footer/Footer";

// const App = () => {
//   const [url, setUrl] = useState(null);
//   const [viewer, setViewer] = useState(false);

//   return (
//     <div className={classes.app}>
//       {!viewer && (
//         <>
//           <input
//             type="text"
//             onChange={(e) => setUrl(e.target.value)}
//             value={url}
//           />
//           <button onClick={() => setViewer(true)}>
//             Open file embedded gdrive
//           </button>
//         </>
//       )}

//       {/* <Container type="outer"> */}
//       {/* <Header />
//         <Robo /> */}
//       {/* <Container type="inner">
//           <FrequentlyAsked />
//           {questionsMarkup}
//           <Footer />
//         </Container>
//       </Container> */}
//       {/* <h3 className={classes.name}>{questions}</h3>
//       <h3>{isBrowserCompatible ? "True" : "False"}</h3> */}
//       {/* {viewer && (
//         <embed
//           className={classes.embedClass}
//           src={`https://drive.google.com/viewerng/
//           viewer?embedded=true&url=http://example.com/the.pdf`}
//           type="application/pdf"
//         /> */}
//       {/* <object
//           className={classes.embedClass}
//           data={url}
//           type="application/pdf"
//         >
//           alt : <a href={url}>test.pdf</a>
//         </object> */}

//       <iframe
//         id="pdf-js-viewer"
//         src={url}
//         title="webviewer"
//         frameborder="0"
//         width="100%"
//         height="600"
//       ></iframe>
//       {/* )} */}
//     </div>
//   );
// };
const App = () => {
  const viewer = useRef(null);
  const [rerender, setRerender] = useState(0);
  const [url, setUrl] = useState(
    "https://ingenium-userfiles.s3.ap-south-1.amazonaws.com/Production/100.056932.020200925_070616.pdf"
  );
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    WebViewer(
      {
        path: "./public",
        licenseKey: `${
          process.env.NODE_ENV === "development"
            ? "q1oxn6WyDRc572siUU5z"
            : "GvijE5XlpCs4ewd2fI2q"
        }`,
        initialDoc: `${url}`,
      },
      viewer.current
    ).then((instance) => {
      // now you can access APIs through the WebViewer instance
      const { Core } = instance;

      // adding an event listener for when a document is loaded
      Core.documentViewer.addEventListener("documentLoaded", () => {
        console.log("document loaded");
      });

      // adding an event listener for when the page number has changed
      Core.documentViewer.addEventListener(
        "pageNumberUpdated",
        (pageNumber) => {
          console.log(`Page number is: ${pageNumber}`);
        }
      );
    });
  }, [rerender]);

  return (
    <div style={{ height: "100vh" }}>
      {/* <p style={{ width: "90%" }}>File is : {url}</p> */}
      <div style={{ height: "100vh" }} className="webviewer" ref={viewer}>
        {" "}
      </div>
    </div>
  );
};

export default App;
