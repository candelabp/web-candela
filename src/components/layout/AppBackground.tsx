export default function AppBackground() {
  return (
    <>
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0"></div>
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
    </>
  );
}
