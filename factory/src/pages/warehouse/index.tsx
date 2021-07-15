import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Button
} from '@material-ui/core'
import moment from 'moment'
import Link from 'next/link'

import api from '../../services/api'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})

interface ITask {
  id: number
  title: string
  description: string
  finished: boolean
  created_at: Date
  updated_at: Date
}

export default function Warehouse() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const router = useRouter()

  useEffect(() => {
    loadTasks()
  }, [])

  async function loadTasks() {
    const response = await api.get('/tasks')
    setTasks(response.data)
  }

  const classes = useStyles()

  function formateDate(date: Date) {
    return moment(date).format('DD/MM/YYYY')
  }

  function editTask(id: number) {
    router.push(`/warehouse/addwarehouse/${id}`)
  }

  return (
    <Container>
      <div>
        <Button variant="contained" color="primary">
          <Link href={{ pathname: `/warehouse/addwarehouse` }} replace>
            Nova Almoxarifado
          </Link>
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Título</TableCell>
              <TableCell align="right">Data de Atualização</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell component="th" scope="row">
                  {task.id}
                </TableCell>
                <TableCell align="right">{task.title}</TableCell>
                <TableCell align="right">
                  {formateDate(task.updated_at)}
                </TableCell>
                <TableCell align="right">
                  {task.finished ? 'Sim' : 'Não'}
                </TableCell>
                <TableCell align="right">
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => editTask(task.id)}
                  >
                    Editar
                  </Button>
                  <Button color="primary" variant="contained">
                    Finalizar
                  </Button>
                  <Button color="primary" variant="contained">
                    Visualizar
                  </Button>
                  <Button color="secondary" variant="contained">
                    Remover
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
