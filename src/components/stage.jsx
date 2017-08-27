var ItenList = require("./ItenList");
var WinPop = require("./WinPop");
var NowState = require("./NowState");
var stage = React.createClass({
    getInitialState: function() {
        return {
            win: '',
            isClickBox: true,
            OX:[
                {id:0, isClick: false, state: 0},
                {id:1, isClick: false, state: 0},
                {id:2, isClick: false, state: 0},
                {id:3, isClick: false, state: 0},
                {id:4, isClick: false, state: 0},
                {id:5, isClick: false, state: 0},
                {id:6, isClick: false, state: 0},
                {id:7, isClick: false, state: 0},
                {id:8, isClick: false, state: 0},
            ],
        };
    },
    setOoxxData: function (idx, event) {
        if (this.state.win != '') return;
        var copyState = this.state.OX.slice();
        if (!copyState[idx].isClick) this.setState({ isClickBox: !this.state.isClickBox });
        if (!copyState[idx].isClick) copyState[idx].state = this.state.isClickBox ? 1 : -1;
        copyState[idx].isClick = true;
        this.setState(copyState);
        this.twoArray();
    },
    twoArray() {
        var copyState = this.state.OX.slice();
        var arr = [];
        var arrInt = 0;
        var nextLevel = 0;
        var calculation = 0;
        for (var i = 0; i < 3; i++) {
            arr[i] = []
            for (var j = 0; j < 3; j++) {
                arr[i][j] = null;
            }
        }
        for (var i = 0; i < 3; i++) {
            arr[0][i] = copyState[i].state;
            arr[1][i] = copyState[i+3].state;
            arr[2][i] = copyState[i+6].state;
        }
        this.isWinFn(arr);
    },
    isWinFn(data) {
        var s = null;
        var iSum1 = 0;
        var iSum2 = 0;
        var iSum3 = 0;
        var iSum4 = 0;
        var iSum5 = 0;
        var iSum6 = 0;
        var iSum7_1 = 0;
        var iSum7_2 = 0;
        var iSum8_1 = 0;
        var iSum8_2 = 0;
        for (var i = 0; i < 3; i++) {
            iSum1 += data[0][i]
            iSum2 += data[1][i]
            iSum3 += data[2][i]
            iSum4 += data[i][0]
            iSum5 += data[i][1]
            iSum6 += data[i][2]
            iSum7_1 += data[i][0 + i];
            iSum7_2 += data[i][2 - i];
            if (iSum1 === 3 || iSum2 === 3 || iSum3 === 3 ||
                iSum4 === 3 || iSum5 === 3 || iSum6 === 3 ||
                iSum7_1 === 3 || iSum7_2 === 3) {
                this.winAfter("O");
                return;
            }
            if (iSum1 === -3 || iSum2 === -3 || iSum3 === -3 ||
                iSum4 === -3 || iSum5 === -3 || iSum6 === -3 ||
                iSum7_1 === -3 || iSum7_2 === -3) {
                this.winAfter("X");
                return;
            }
        }
    },
    winAfter(state) {
        this.setState({
            win: state
        })
    },
    onReSet() {
        var copyState = this.state.OX.slice();
        copyState.map(function (obj,idx) {
            obj.isClick = false;
            obj.state = 0;
        })
        this.setState({
            win: '',
            isClickBox: true,
            OX: copyState
        })
    },
    render: function () {
        var thix = this;
        return (
            <div>
                <WinPop winState={this.state.win} onReSet={this.onReSet}/>
                <NowState state={this.state.isClickBox}/>
                <div className="ooxx">
                    {
                        this.state.OX.map(function (obj, idx) {
                            return (
                                <ItenList
                                    setOoxxData={thix.setOoxxData}    
                                    data={obj}
                                    key={idx}
                                />
                            )
                        })
                    }    
                </div>
            </div>
        );
    }
});

module.exports = stage;
