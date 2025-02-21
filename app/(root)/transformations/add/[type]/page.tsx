import Header from '@/components/shared/Header'
import React from 'react'
import { transformationTypes } from '@/constants'
import TransformationForm from '@/components/TransformationForm'



//whatever we write in [] brackets, we can access it as props using params
const AddTransformationTypePage = ({ params: { type }}: SearchParamProps) => {

  const tranformation = transformationTypes[type]

  return (
    <>
      <Header  title={tranformation.title}
        subtitle={tranformation.subTitle}
      />

      <TransformationForm />
    </>
  )
}

export default AddTransformationTypePage
