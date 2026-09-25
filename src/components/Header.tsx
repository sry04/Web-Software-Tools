interface HeaderProps {
  total: number;
  completed: number;
}

function Header({ total, completed }: HeaderProps) {
  return (
    <header className="header">
      <div>
        <h1>To-Do List</h1>
        <p>Kelola tugas kamu dengan mudah.</p>
      </div>

      <div className="stats">
        <div>
          <strong>{total}</strong>
          <span>Total</span>
        </div>

        <div>
          <strong>{completed}</strong>
          <span>Selesai</span>
        </div>
      </div>
    </header>
  );
}

export default Header;