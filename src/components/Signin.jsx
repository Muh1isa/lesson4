
export default function Signin({setModal, name, setName, psw, setPsw, handSignIn}) {
  return (
    <div className="modal-wrapper">
        <form className="modal" onSubmit={handSignIn}>

            <span onClick={() => setModal(false)}>x</span>
            <h2>Вход</h2>
            <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="password" placeholder="Password" value={psw} onChange={(e) => setPsw(e.target.value)} /><br /><br />
            <button>Вход</button>
        </form>
    </div>
  )
}
