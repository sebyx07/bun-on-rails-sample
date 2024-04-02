export default function HomeView(){
  useEffect(() => {
    setPageTitle("Home")
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a static page that doesn't require a database connection.</p>
    </div>
  )
}