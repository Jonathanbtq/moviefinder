export default function JaugeMovieScore(props){
    const pourcentageValide = Math.max(0, Math.min(100, props.pourcentageVote));
    const prcValide = pourcentageValide * 10

    // Style du camembert
    const styleCamembert = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      width: '90%',
      height: '90%',
      borderRadius: '50%',
      background: `conic-gradient(
        #32CD32 0% ${prcValide}%,
        transparent ${prcValide}% 100%
    )`,
      zIndex: '3',
    };

    const midStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '88px',
        height: '88px',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#3498db',
        zIndex: '4',
        border: '1px solid #2980b9'
    }
    
    const divctn = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '110px',
        height: '110px',
        borderRadius: '50%',
        backgroundColor: '#2c3e50',
        position: 'relative',
        zIndex: '0'
    };

    const pstyle = {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30px',
        zIndex: '100',
        color: '#ecf0f1',
    }
  
    return (
        <div style={divctn}>
            <div style={styleCamembert}></div>
            <div style={midStyle}>
                <p style={pstyle}>{props.pourcentageVote}</p>
            </div>
        </div>
    );
}