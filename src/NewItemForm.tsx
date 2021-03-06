import React, {useState} from 'react'
import { 
  NewItemFormContainer,
  NewItemButton,
  NewItemInput
} from './styles'

interface NewItemsFormProps {
  onAdd(text:string) : void
}

export const NewItemForm = (props: NewItemsFormProps) => {
  const [text, setText] = useState("")
  const {onAdd} = props;

  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={e =>setText(e.target.value)}
      />
      <NewItemButton onClick={()=> onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}