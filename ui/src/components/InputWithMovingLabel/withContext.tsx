import React, { useContext, useState } from "react";
import { InputWithMovingChangingLabel, InputWithMovingLabel } from ".";
import { queryMostFrequentCountContext } from "../../contexts/context";
import './style.css';




type Props = {
}
export const InputWithMovingChangingLabelWithContext = ({}: Props) => {

  const [queryMostFrequent, setQueryMostFrequent] = useContext(queryMostFrequentCountContext);
  return (
    <InputWithMovingChangingLabel value={queryMostFrequent} setValue={setQueryMostFrequent}/>
  )
}
InputWithMovingChangingLabelWithContext.defaultProps = {};






export const InputWithMovingLabelWithContext = ({}: Props) => {

  const [queryMostFrequent, setQueryMostFrequent] = useContext(queryMostFrequentCountContext);
  return (
    <InputWithMovingLabel value={queryMostFrequent} setValue={setQueryMostFrequent}/>
  )
}
InputWithMovingLabelWithContext.defaultProps = {};