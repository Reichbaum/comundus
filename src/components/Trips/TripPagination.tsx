import cn from 'classnames'
import {useDispatch, useSelector} from 'react-redux'
import {getCurrentPage, getIsFetching, getPerPage, getTotalCount} from '../../redux/selectors'
import {requestTrips} from '../../redux/tripsReducer'
import {Pagination} from 'antd'
import React, {FC} from 'react'

type PagType = {
  hide: boolean
}

const TripPagination: FC<PagType> = ({hide}) => {

  const isFetching = useSelector(getIsFetching)
  const totalCount = useSelector(getTotalCount)
  const currentPageNumber = useSelector(getCurrentPage)
  const perPage = useSelector(getPerPage)

  const dispatch = useDispatch()
  const hideIfFetching = cn(isFetching && hide && 'hide', 'app__pagination')

  function onShowSizeChange(currentPageNumber: number, perPage: number) {
    dispatch(requestTrips(currentPageNumber, perPage))
  }

  function onPageChange(numberPage: number, perPage: number | undefined) {
    dispatch(requestTrips(numberPage, perPage))
  }

  return <div className={hideIfFetching}>
    <Pagination
      onShowSizeChange={onShowSizeChange}
      onChange={onPageChange}
      total={totalCount}
      showTotal={(total, range) => `${range[0]}-${range[1]} von ${total} Elemente`}
      defaultPageSize={perPage}
      defaultCurrent={currentPageNumber}
      pageSizeOptions={['9', '12', '24', '36']}
      responsive
    />
  </div>
}

export default TripPagination