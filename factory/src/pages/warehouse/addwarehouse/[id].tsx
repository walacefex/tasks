import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button, TextField, Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import api from '../../../services/api'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '30px',
      width: '100%',
      '& .MuiTextField-root': {
        margin: theme.spacing(1)
      }
    },
    row: {
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '30px'
    }
  })
)

interface ITask {
  title: string
  description: string
}
export default function AddWarehouse() {
  const router = useRouter()
  const { id } = router.query
  const [model, setModel] = useState<ITask>({
    title: '',
    description: ''
  })

  useEffect(() => {
    if (id !== undefined) {
      findTask(id)
    }
  }, [id])

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      const response = await api.put(`/tasks/${id}`, model)
    } else {
      const response = await api.post('/tasks', model)
    }
  }

  async function findTask(id: any) {
    const response = await api.get(`tasks/${id}`)
    setModel({
      title: response.data.title,
      description: response.data.description
    })
  }

  const classes = useStyles()
  return (
    <Container maxWidth="md">
      <div className={classes.row}>
        <h2>Adicionar Almoxarifado</h2>
        <Button variant="contained" color="primary">
          <Link href="/warehouse" replace>
            Voltar
          </Link>
        </Button>
      </div>

      <form className={classes.root} autoComplete="off" onSubmit={onSubmit}>
        <TextField
          required
          label="Título"
          variant="filled"
          name="title"
          value={model.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
        />
        <TextField
          required
          label="Descrição"
          variant="filled"
          name="description"
          value={model.description}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
        />
        <Button variant="contained" color="primary" type="submit">
          {' '}
          Adicionar
        </Button>
      </form>
    </Container>
  )
}
