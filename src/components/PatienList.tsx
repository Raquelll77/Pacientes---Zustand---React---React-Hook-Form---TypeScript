import { usePatienStore } from "../store"
export default function PatienList() {

  const patients = usePatienStore(state => state.patients)  
  console.log(patients)
  return (
    <div>PatienList</div>
  )
}
