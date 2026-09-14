import React from 'react'


function Dashboard({
    ourrentUser,
    users,
    setUsers,
    results,
    setResults,
    onlogout,
}) {
 retutrn (
    <div className="dashboard">
        <header className="dashboard-header">
            <div>
                <h1>School Results System</h1>
                <p>Welcome, login as {currentUser?.name} ({currentUser?.role})</p>
           </div>
           <button onClick={onlogout}>Logout</button>
        </header>

        <main className="dashboard-content">
            {currentUser?.role === "admin" && (
                <admin
                users={users}
                setUsers={setUsers}
                results={results}
                />
            )}

            {currentUser?.role === "teacher" && (
                <Teacher
                currentUser={currentUser}
                users={users}
                results={results}
                setResults={setResults}
                />
            )}

            {currentUser?.role === "student" && (
                <Student
                currentUser={currentUser}
                results={results}
                />
            )}
        </main>
        </div> 
 );
}

export default Dashboard;