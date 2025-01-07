import masterThesisPDF from "../static/pdfs/stack_semantics.pdf";
import bachelorArbeitPDF from "../static/pdfs/bachelorarbeit.pdf";
import { useState } from "react";

function Texte() {
  const [masterThesisDetails, setMasterThesisDetails] = useState(false);
  const [bachelorThesisDetails, setBachelorThesisDetails] = useState(false);

  return (
    <main className="w-full flex-grow overflow-auto bg-violet-50">
      <section className="mx-auto max-w-4xl px-4 py-6">
        <p className="mb-4 bg-white px-6 py-3">
          Hier findest du Texte, die ich in meiner Unizeit geschrieben habe.
          Unter anderem meine Master- und meine Bachelorarbeit, aber auch Texte
          über andere Themen.
        </p>

        <div className="flex bg-white pr-6">
          <div className="flex-grow px-6 py-3">
            <a
              className="font-bold text-violet-800 underline visited:text-violet-600 hover:cursor-pointer hover:text-red-800"
              href={masterThesisPDF}
              target="_blank"
            >
              Stack Semantics: A language for relative category theory
            </a>
          </div>
          <button
            className="flex min-w-14 content-center items-center justify-center hover:cursor-pointer"
            onClick={() => {
              setMasterThesisDetails(!masterThesisDetails);
            }}
          >
            {!masterThesisDetails && (
              <svg
                className="h-6 w-6 text-violet-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            )}
            {masterThesisDetails && (
              <svg
                className="h-6 w-6 text-violet-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="m5 15 7-7 7 7"
                />
              </svg>
            )}
          </button>
        </div>

        {masterThesisDetails && (
          <div className="mb-4 bg-white px-6 pb-3">
            <div className="mb-2 py-4">
              <hr className="border-violet-100"></hr>
            </div>
            <p className="mb-2">
              Das Ziel der Arbeit war es die interne Sprache eines Topos - in
              diesem Fall eine Version von Martin-Löf's abhängiger Typentheorie
              - und deren Semantik so auszuweiten, dass sie über "große
              Kollektionen" sprechen kann, die in der Standardsematik nicht
              innnerhalb des Basistopos modelliert werden können. Was in der
              Sprache wie eine große Kategorie aussieht (zum Beispiel wie die
              Kategorie der Mengen oder die der Gruppen) wird extern durch
              Stacks über dem Basistopos modelliert. So ist die Interpretation
              der Kategorie der Mengen beispielsweise die Codomain-Fibration
              über dem Basistopos.
            </p>

            <p className="mb-2">
              Es ist lange bekannt gewesen, dass sich die interne Sprache auf
              diese Weise erweitern lässt. Ausführlich verschriftlichte
              Versionen gab es aber noch nicht. Was dem am nächsten kommt
              nächsten kommt ist Mike Shulman's Paper{" "}
              <em>
                Stack semantics and the comparison of material and structural
                set theories
              </em>
              . Was meine Masterarbeit leistet, ist eine solche
              Spracherweiterung (mit entsprechenenden Kategorie-Konstruktoren)
              und ihre Semantik explizit aufzuschreiben. Ich habe besonderen
              Fokus darauf gelegt, dass Problem der Striktifizierung nicht unter
              den Tisch fallen zu lassen. In Konsequenz kommt die Arbeit nicht
              um eine gute Menge 2-Kategorientheorie herum.
            </p>

            <p>
              Es zeigt sich außerdem, dass die erweiterte Sprache mehrere
              nützliche Anwendungen hat. Dazu gehören insbesondere eine
              konzeptuelle Vereinfachung vieler Beweise über
              Grothendieck-Fibrationen, die nun komplett in der internen Sprache
              ausgedrückt werden können, und außerdem mehr Elbogenraum, so dass
              sich die Typenkonstruktoren von MLTT und ihre Anforderungen an den
              Basistopos intern diskutiert werden können, wo sich diese im
              Vergleich zu ihren externen Formulierungen stark vereinfachen und
              intuitiv mehr Sinn ergeben (siehe Kapitel 3.2).
            </p>
          </div>
        )}

        <div className="mt-4 flex bg-white pr-6">
          <div className="flex-grow px-6 py-3">
            <a
              className="font-bold text-violet-800 underline visited:text-violet-600 hover:cursor-pointer hover:text-red-800"
              href={bachelorArbeitPDF}
              target="_blank"
            >
              The projective symmetry group method: An application to
              kagome-based frustrated quantum spin systems
            </a>
          </div>
          <button
            className="flex min-w-14 content-center items-center justify-center hover:cursor-pointer"
            onClick={() => {
              setBachelorThesisDetails(!bachelorThesisDetails);
            }}
          >
            {!bachelorThesisDetails && (
              <svg
                className="h-6 w-6 text-violet-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            )}
            {bachelorThesisDetails && (
              <svg
                className="h-6 w-6 text-violet-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="m5 15 7-7 7 7"
                />
              </svg>
            )}
          </button>
        </div>

        {bachelorThesisDetails && (
          <div className="mb-4 bg-white px-6 pb-3">
            <div className="mb-2 py-4">
              <hr className="border-violet-100"></hr>
            </div>
            <p className="mb-2">
              Das ist meine Bachelorarbeit die ich in Johannes Reuthers
              Festkörperphysik Gruppe an der FU Berlin geschrieben habe. Das
              Ziel war es die theoretisch erlaubten Zustände eines möglichen
              Quantum-Liquid States von (geometrisch) frustrierten Spinsystemen
              auf einem Kagome-Gitter über deren projektive Symmetriegruppe zu
              klassifizieren. Mehr Kontext und Verweise zur entsprechenden
              Literatur finden sich in der Arbeit.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Texte;
