export const PrimaryButton = () => {
  const onClick = () => {
    console.log('プライマリーボタンがクリックされました')
  }
  return (
    <>
      <button onClick={onClick}>プライマリーボタンです</button>
    </>
  )
}