const RemoveIcon = ({ onClick }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width='20'
      height='20'
      onClick={onClick}
      className='list__button'>
      <path
        d='M10.806641 2C10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125L9 3L4 3 A 1.0001 1.0001 0 1 0 4 5L20 5 A 1.0001 1.0001 0 1 0 20 3L15 3L14.570312 2.5703125C14.205312 2.2043125 13.710359 2 13.193359 2L10.806641 2 z M 4.3652344 7L5.8925781 20.263672C6.0245781 21.253672 6.877 22 7.875 22L16.123047 22C17.121047 22 17.974422 21.254859 18.107422 20.255859L19.634766 7L4.3652344 7 z'
        fill='#FFFFFF'
      />
    </svg>
  )
}

export default RemoveIcon
