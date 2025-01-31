import { Fragment, useState } from 'react'
import useFilterdData from './hooks/useFilteredData'

export default function CascadingFilter() {

    const [filters, setFilters] = useState({})
    const [indexTillShow, setIndexTillShow] = useState(0)

    const hierarchy = [{ value: 'category', title: 'Category' }, { value: 'brand', title: 'Brand' }, { value: 'tags', title: 'Tags' }]

    const { data, isLoading } = useFilterdData(filters)
    const { products } = data

    function updateIndexTillShow(index) {
        setIndexTillShow(index)
    }
    function updateFilters(key, value) {
        setFilters({ ...filters, [key]: value })
    }

    function uniqueValueFromArray(list) {
        return [... new Set(list)]
    }
    return <>
        {isLoading && <span className="loading loading-spinner loading-lg"></span>}
        <div className='flex gap-4 flex-wrap'>
            {!isLoading && products && hierarchy.map((item, i) =>
                <Fragment key={i}>
                    <SelectComponent
                        index={i}
                        selectedValue={filters[item.value]}
                        data={i > indexTillShow ? [] : uniqueValueFromArray(products.map(product => product[item.value]))}
                        titleValue={item}
                        updateIndexTillShow={updateIndexTillShow}
                        updateFilters={updateFilters} />
                </Fragment>)}
        </div>
        <div className='flex w-full overflow-x-scroll'>
            {
                products && products.map(product => <img src={product.thumbnail} />)
            }
        </div>
    </>
}

function SelectComponent({ index, titleValue, selectedValue, data, updateFilters, updateIndexTillShow }) {
    const { value, title } = titleValue

    function onClickOption(clickedOption) {
        updateIndexTillShow(index + 1)
        updateFilters(value, clickedOption)
    }

    return <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text text-lg font-bold">{title}</span>
        </div>
        <select defaultValue={selectedValue ?? 'Pick one'} onChange={e => onClickOption(e.target.value)} className="select select-bordered select-primary capitalize">
            <option disabled>Pick one</option>
            {
                data.map((item, i) => <option className='capitalize' key={i}>{item}</option>)
            }
        </select>
    </label>
}
