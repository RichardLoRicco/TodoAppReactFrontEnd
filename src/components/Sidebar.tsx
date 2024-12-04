

const Sidebar = () => {

  return (
    <div id="sidebar" >
    <section id="all">
      <div id="all_todos">
        <header data-title="All Todos" data-total="{{todos.length}}" id="all_header">
          <dl>
            <dt>All Todos</dt>
            <dd>All Todos here</dd>
          </dl>
        </header>
      </div>
    </section>
  </div>
  )
}

export default Sidebar;