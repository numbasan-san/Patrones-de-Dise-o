def singleton ( cls ) :
    
    instances = dict ()

    def wrap ( *args, **kwargs ) :
    
        if cls not in instances :

            instances [ cls ] = cls ( *args, **kwargs )

        return instances [ cls ]

    return wrap

@singleton
class User ( object ) :

    def __init__ ( self, monster ) :
        self.monster = monster

if __name__ == '__main__' :

    monster1 = User ( 'Zinogre' )
    monster2 = User ( 'Jinowa' )

    print ( 'Nuevo monstruo' )
    print ( monster1 is monster2 )