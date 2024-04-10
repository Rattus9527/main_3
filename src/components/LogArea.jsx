function LogArea({ logAreaState, showLog, log }) {
  const logList = log.map((el) => <p>{el}</p>);
  return (
    <div className={logAreaState ? "log" : "hidden"} onClick={showLog}>
      {logList}
    </div>
  );
}
export default LogArea;
