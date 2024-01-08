export default function JaugeMovieScore(props){
    const pourcentageValide = Math.max(0, Math.min(100, props.pourcentageVote));
    const prcValide = pourcentageValide * 10

    // Style du camembert
    const styleCamembert = {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
      width: '100px',
      borderRadius: '50%',
      background: `conic-gradient(
        blue 0% ${prcValide}%,
        transparent ${prcValide}% 100%
      )`,
      zIndex: '-1'
    };

    // Style du camembert
    const divctn = {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        width: '90px', // Ajustez la largeur selon vos besoins
        height: '90px', // Ajustez la hauteur selon vos besoins
        borderRadius: '50%', // Rend le div circulaire
        backgroundColor: 'red',
        zIndex: '5'
    };

    const pstyle = {
        textAlign: 'center',
        width: 'auto',
        height: 'auto'
    }
  
    return (
        <div style={divctn}>
            <div style={styleCamembert}>
                <p style={pstyle}>{props.pourcentageVote}</p>
            </div>
        </div>
    );
}