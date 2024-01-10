export const OptionTypes = { 
    RANGE: 'range', 
    SWITCH: 'switch', 
    SELECTOR: 'selector'
}

function getUniqueGroups(arr) {
    let uniqueGroups = []
    arr.forEach((option) => {
        if (!uniqueGroups.includes(option.group)) { 
            uniqueGroups.push(option.group)
        }
    })
    return uniqueGroups
}

function filterOptionsByType(options, type) { 
    let result = []

    options.forEach((option) => {
        if (option.type === type.toUpperCase()) { 
            result.push(option)
        }
    })
    return result
}


export const RangeCharactersitics = (props) => { 
    // Предпологается что структуры данных правильны скпонованы изначально! 
    const { options, addAttributes } = props; 
    let rangeOptions = filterOptionsByType(options, OptionTypes.RANGE)

    return ( 
        <div>
            {rangeOptions.map((option) => { 
                return ( 
                    <div>
                        <input type="number" placeholder={option.valueRange.min + " До " + option.valueRange.max}>Введите значение</input>
                    </div>
                )
            })}
        </div>
    )
}


export const SwitchCharactersitics = (props) => {
    const { options, addAttributes } = props; 
    let switchOptions = filterOptionsByType(options, OptionTypes.SWITCH)

    return (
        <div>
            {switchOptions.map((option) => {
                return ( 
                    <div>
                        <p>{option.label}</p>
                        {/* Красивое переключение True False 
                        и ставит значение через функцию addAttributes(option.field, и значение) */}
                    </div>
                )
            })}
        </div>
    )
}

export const SelectorCharactersitics = (props) => { 
    const { options, addAttributes } = props 
    let uniqueGroups = getUniqueGroups(options)
    let selectorOptions = filterOptionsByType(options, OptionTypes.SELECTOR)

    return ( 
        <div>
            {uniqueGroups.map((group) => {
                <h3>{ group }</h3>
                {/* дается несколько характеристик типо 20 гемов, 40 гемов и т.д. на выбор и можно выбрать только один */}
                return (selectorOptions.map((option) => {
                    return ( 
                        <div>
                            <div>{option.label}</div>
                            {/* Красивый выбор через кнопки только одного выбора, потом
                            ставит значение через функцию addAttributes(option.field, и выбранное значение) */}
                        </div>
                    )
                })) 
                })
            }
        </div>
    )
}
