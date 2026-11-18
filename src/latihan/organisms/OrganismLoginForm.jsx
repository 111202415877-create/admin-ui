import React from "react";
import MoleculeFormField from "../molecules/MoleculeFormField";
import AtomButton from "../atoms/AtomButton";

const OrganismLoginForm = () => {
  return (
    <>
	    <form>
	      <MoleculeFormField />
	      <br />
	      <MoleculeFormField />
	      <br />
	      <AtomButton />
      </form>
    </>
  );
};

export default OrganismLoginForm;