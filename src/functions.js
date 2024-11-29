export const backFunction = (
    _stage, _setStage
) => {
    if (_stage > 0) {
        _setStage(_stage - 1);
        switchStagesColor();
    }
}
export const forwardFunction = (
    stage, setStage
) => {
    if (stage < 5) {
        setStage(stage + 1);
        switchStagesColor();
    }
}

export const switchStagesColor = (
    _stage, _setLineGrowth
) => {
    switch (_stage) {
        case 2: _setLineGrowth('coloured-line growth-25'); break;
        case 3: _setLineGrowth('coloured-line growth-50'); break;
        case 4: _setLineGrowth('coloured-line growth-75'); break;
        case 5: _setLineGrowth('coloured-line growth-100'); break;
        default: _setLineGrowth('coloured-line');
    }
}