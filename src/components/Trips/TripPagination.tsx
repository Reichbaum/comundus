import cn from 'classnames'
import {useDispatch, useSelector} from 'react-redux'
import {getIsFetching, getPerPage} from '../../redux/selectors'
import {requestTrips} from '../../redux/tripsReducer'
import {Pagination} from 'antd'
import React, {FC} from 'react'
import {tripSearchValuesType} from './TripsPage'

type TripPaginationType = {
  hide: boolean
  searchValues: tripSearchValuesType
  currentPageNumber: number
  totalCount: number
}

const TripPagination: FC<TripPaginationType> = ({hide,
                                                  searchValues,
                                                  currentPageNumber,
                                                  totalCount}) => {

  const isFetching = useSelector(getIsFetching)
  const perPage = useSelector(getPerPage)

  const dispatch = useDispatch()
  const hideIfFetching = cn(isFetching && hide && 'hide', 'app__pagination')

  function onShowSizeChange(currentPageNumber: number, perPage: number) {
    dispatch(requestTrips(currentPageNumber, perPage, searchValues))
  }

  function onPageChange(numberPage: number, perPage: number | undefined) {
    dispatch(requestTrips(numberPage, perPage, searchValues))
  }

  return <div className={hideIfFetching}>
    <Pagination
      onShowSizeChange={onShowSizeChange}
      onChange={onPageChange}
      total={totalCount}
      showTotal={(total, range) => `${range[0]}-${range[1]} von ${total} Elemente`}
      defaultPageSize={perPage}
      defaultCurrent={currentPageNumber}
      current={currentPageNumber}
      pageSizeOptions={['9', '12', '24', '36']}
      responsive
    />
  </div>
}

export default TripPagination