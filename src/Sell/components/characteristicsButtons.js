const SwitchButton = (props) => {
    const { defaultState } = props 
    
    return (
        <div>
            {/* make button here!! */}
        </div>
    )
}

const SelectButton = (props) => {
    // ButtonName это 
    const { buttonName } = props; 
    
    return ( 
        <div>

        </div>
    )
}

const SelectorButtons = (props) => { 
    // фильтруются только опции которые имеют тип - SELECTOR 
    const { options } = props 
    let uniqueGroups = []
    options.forEach((option) => {
        if (uniqueGroups.includes(option) !== null || uniqueGroups.includes(option) !== undefined) { 
            uniqueGroups.push(option)
        }
    })

    return ( 
        <div>
            {uniqueGroups.map((group) => {
                <h3>{ group }</h3>
                {/* дается несколько характеристик типо 20 гемов, 40 гемов и т.д. на выбор и можно выбрать только один */}
                return (options.map((option) => {
                    return ( 
                        <div>
                            <div>{option.label}</div>
                            {/* Красивая кнопка */}
                        </div>
                    )
                })) 
                }
            )
            }
            
        </div>
    )
}
