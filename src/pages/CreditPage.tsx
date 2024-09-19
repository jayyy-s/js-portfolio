import PageSection from "../components/common/PageSection";

const BearCredit = () => {
  return (
    <div className="border-box p-5 pointer-events-auto">
      <div className="text-xl">
        <a
          className="underline hover:text-js-hover"
          href="https://poly.pizza/m/evjB26aGfTh"
          target="_blank"
        >
          Bear
        </a>{" "}
        by{" "}
        <a
          className="underline hover:text-js-hover"
          href="https://poly.pizza/u/jeremy"
          target="_blank"
        >
          jeremy
        </a>{" "}
        <a
          className="underline hover:text-js-hover"
          href="https://creativecommons.org/licenses/by/3.0/"
          target="_blank"
        >
          [CC-BY]
        </a>{" "}
        via Poly Pizza
      </div>
    </div>
  );
};

const CreditPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center py-20">
      <div className="w-auto space-y-2 px-[5%] pointer-events-auto">
        <PageSection title="Credit" children={[<BearCredit />]} />
      </div>
    </div>
  );
};

export default CreditPage;
