import { getTemplateById } from '@/server-actions/templates'
import React from 'react'
import Resume from '../_components/resume'


async function TemplatePreview( {params} : {
    params : {
        id: string
    }
} ) {

  const {id} = await params;

    const response = await getTemplateById(id);
  return (
    <div>
      <Resume template={response.data} />
    </div>
  )
}

export default TemplatePreview