" Comment
syn match cpptrajComment /#.*/

" Data Types
"syn match cpptrajNumber /\d\+[\.]\?\d\+/ " buggy, fix
syn match cpptrajNumber "\<\d\+\>#\=" " taken from bash syntax highlighting
syn match cpptrajNumber "\<-\=\.\=\d\+\>#\=" " taken from bash syntax highlighting

" Variables
syn match cpptrajIdentifier /\$[A-z0-9]\+/

" Statements
syn keyword cpptrajKeyword set show run parm trajin dihedral distance out multidihedral resrange xlabel ylabel zlabel xmin ymin zmin sort xstep ystep zstep time prec xprec xfmt catcrd combinecrd crdaction crdout crdtransform createcrd emin extendedcomp graft loadcrd loadtrj permutedihedrals prepareforleap reference rotatedihedral sequence splitcoords zmatrix activeref calc clear create createset datafile datafilter dataset debug prnlev ensextension exit quit flatten go help list noexitonerror noprogress parallelanalysis parsetiming precision random printdata readdata readensembledata readinput removedata rst runanalysis select selectds silenceactions sortensembledata usediskcache write writedata angleinfo angles printangles atominfo atoms printatoms bondinfo bonds printbonds change charge comparetop dihedralinfo dihedrals printdihedrals hmassrepartition improperinfo impropers printimpropers mass molinfo parmbox parminfo parmstrip parmwrite printub ubinfo resinfo scaledihedralk solvent updateparameters ensemble ensemblesize reference trajout align angle areapermol atomiccorr atomicfluct rmsf atommap autoimage average avgbox avgcoord bounds box center check checkoverlap checkstructure checkchirality closest closestwaters clusterdihedral contacts createcrd createreservoir density diffusion dihedral dihrms dihedralrms dipole distance drms drmsd dssp secstruct energy esander filter fixatomorder fiximagedbonds gist grid hbond image jcoupling keep lessplit lie lipidorder lipidscd makestructure mask matrix minimage molsurf multidihedral multipucker multivector nastruct nativecontacts outtraj pairdist pairwise principal projection pucker radgyr, rog radial, rdf randomizeions remap replicatecell rms, rmsd rotate runavg, runningaverage scale setvelocity spam stfcdiffusion strip surf symmrmsd temperature time trans, translate unstrip unwrap vector velocityautocorr volmap volume watershell xtalsymm autocorr avg calcstate cluster corr cphstats crank crdfluct crosscorr curvefit diagmatrix divergence evalplateau FFT hausdorff hist integrate ired kde lifetime lowestcurve meltcurve modes multicurve multihist phipsi regress remlog rms2d rmsavgcorr rotdif runningavg spline stat ti timecorr vectormath wavelet correlationcoe crankshaft histogram 2drms statistics
syn keyword cpptrajRepeat for done

" Linking
hi link cpptrajComment Comment
hi link cpptrajNumber Number
hi link cpptrajIdentifier Function
hi link cpptrajRepeat Repeat
hi link cpptrajKeyword Keyword
